# Setup file template to upload data to MongoDB Atlas
mongoimport --uri mongodb+srv://jyothikondupally:h6pzJBZWff9Xv6PZ@cluster0.7o1else.mongodb.net/ --drop --collection users --file data/export_qkart_users.json
mongoimport --uri mongodb+srv://jyothikondupally:h6pzJBZWff9Xv6PZ@cluster0.7o1else.mongodb.net/ --drop --collection products --file data/export_qkart_products.json