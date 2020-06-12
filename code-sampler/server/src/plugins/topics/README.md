# Indexing Strategies
The best indexes for your application must take a number of factors into account, including the kinds of queries you expect, the ratio of reads to writes, and the amount of free memory on your system.

When developing your indexing strategy you should have a deep understanding of your application’s queries. Before you build indexes, map out the types of queries you will run so that you can build indexes that reference those fields. Indexes come with a performance cost, but are more than worth the cost for frequent queries on large data set. Consider the relative frequency of each query in the application and whether the query justifies an index.

The best overall strategy for designing indexes is to profile a variety of index configurations with data sets similar to the ones you’ll be running in production to see which configurations perform best. Inspect the current indexes created for your collections to ensure they are supporting your current and planned queries. If an index is no longer used, drop the index.

Generally, MongoDB only uses one index to fulfill most queries. However, each clause of an $or query may use a different index, and starting in 2.6, MongoDB can use an intersection of multiple indexes.

The following documents introduce indexing strategies:

Create Indexes to Support Your Queries
An index supports a query when the index contains all the fields scanned by the query. Creating indexes that supports queries results in greatly increased query performance.
Use Indexes to Sort Query Results
To support efficient queries, use the strategies here when you specify the sequential order and sort order of index fields.
Ensure Indexes Fit in RAM
When your index fits in RAM, the system can avoid reading the index from disk and you get the fastest processing.
Create Queries that Ensure Selectivity
Selectivity is the ability of a query to narrow results using the index. Selectivity allows MongoDB to use the index for a larger portion of the work associated with fulfilling the query.











# Create Indexes to Support Your Queries
On this page

Create a Single-Key Index if All Queries Use the Same, Single Key
Create Compound Indexes to Support Several Different Queries
Index Use and Collation
An index supports a query when the index contains all the fields scanned by the query. The query scans the index and not the collection. Creating indexes that support queries results in greatly increased query performance.

This document describes strategies for creating indexes that support queries.

Create a Single-Key Index if All Queries Use the Same, Single Key
If you only ever query on a single key in a given collection, then you need to create just one single-key index for that collection. For example, you might create an index on category in the product collection:

db.products.createIndex( { "category": 1 } )
Create Compound Indexes to Support Several Different Queries
If you sometimes query on only one key and at other times query on that key combined with a second key, then creating a compound index is more efficient than creating a single-key index. MongoDB will use the compound index for both queries. For example, you might create an index on both category and item.

db.products.createIndex( { "category": 1, "item": 1 } )
This allows you both options. You can query on just category, and you also can query on category combined with item. A single compound index on multiple fields can support all the queries that search a “prefix” subset of those fields.

EXAMPLE

The following index on a collection:

{ x: 1, y: 1, z: 1 }
Can support queries that the following indexes support:

{ x: 1 }
{ x: 1, y: 1 }
There are some situations where the prefix indexes may offer better query performance: for example if z is a large array.

The { x: 1, y: 1, z: 1 } index can also support many of the same queries as the following index:

{ x: 1, z: 1 }
Also, { x: 1, z: 1 } has an additional use. Given the following query:

db.collection.find( { x: 5 } ).sort( { z: 1} )
The { x: 1, z: 1 } index supports both the query and the sort operation, while the { x: 1, y: 1, z: 1 } index only supports the query. For more information on sorting, see Use Indexes to Sort Query Results.

Starting in version 2.6, MongoDB can use index intersection to fulfill queries. The choice between creating compound indexes that support your queries or relying on index intersection depends on the specifics of your system. See Index Intersection and Compound Indexes for more details.

Index Use and Collation
To use an index for string comparisons, an operation must also specify the same collation. That is, an index with a collation cannot support an operation that performs string comparisons on the indexed fields if the operation specifies a different collation.

For example, the collection myColl has an index on a string field category with the collation locale "fr".

db.myColl.createIndex( { category: 1 }, { collation: { locale: "fr" } } )
The following query operation, which specifies the same collation as the index, can use the index:

db.myColl.find( { category: "cafe" } ).collation( { locale: "fr" } )
However, the following query operation, which by default uses the “simple” binary collator, cannot use the index:

db.myColl.find( { category: "cafe" } )
For a compound index where the index prefix keys are not strings, arrays, and embedded documents, an operation that specifies a different collation can still use the index to support comparisons on the index prefix keys.

For example, the collection myColl has a compound index on the numeric fields score and price and the string field category; the index is created with the collation locale "fr" for string comparisons:

db.myColl.createIndex(
   { score: 1, price: 1, category: 1 },
   { collation: { locale: "fr" } } )
The following operations, which use "simple" binary collation for string comparisons, can use the index:

db.myColl.find( { score: 5 } ).sort( { price: 1 } )
db.myColl.find( { score: 5, price: { $gt: NumberDecimal( "10" ) } } ).sort( { price: 1 } )
The following operation, which uses "simple" binary collation for string comparisons on the indexed category field, can use the index to fulfill only the score: 5 portion of the query:

db.myColl.find( { score: 5, category: "cafe" } )