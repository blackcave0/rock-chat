## C:\Program Files\MongoDB\Server\6.0\data\

## C:\Program Files\MongoDB\Server\6.0\log\

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## CREATE DATABASE {
    use database_name :: use login
}

## INSERTING DATA IN DATABASE {
    db.logindata.insertOne({name : "name", pass : "pass", int:80, boolean :bool(true/false)})
}

## SHOW DATABASE {
    show dbs
}

## CHECK CURRENT DATABASE {
    db
}

## FOR COLLECTION IN DATABESE {
    show collections
}

## VIEW VALUE OF COLLECTION {
    db.logindata.find()
}

## GET ONLY MONGODB DATA AS A OUTPUT WITH ONLY NAME FIELD. {
    db.collectionName.find({name: "MongoDB"}, {name:0/1}) (0= false, 1 = true)
}

## GET THE MONGODB DATA WITHOUT _ID FILED IN IT {
    db.collectionName.find({name: "MongoDB"}, {_id:0, name:1}) (0= false, 1 = true)
    
}
<!-- 
    db.collectionName.find({active:true}).limit(1)
    db.collectionName.findOne({active:true})
    db.collectionName.find({active:true}).limit(1).skip(1)
 -->


updateOne() => db.collectino_Name.updateOne(<filter>, <update>)
updateMany() => db.collectino_Name.updateOne(<filter>, <update>)
{
    Update the JavaScript tyep value to "Full Stack"
}