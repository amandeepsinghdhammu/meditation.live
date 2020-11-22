# meditation.live
A test task to to fetch data from a mongodb collection using daily/weekly/monthly/CustomDate filter. 

To achieve this task, I've created **CRUD** for below collections. Major end point is `/api/user-views/:productId`, which will produce the desire output.

### Installation Instructions

```
git clone
npm install
npm start
```

### Collections

- **users**
- **products**
- **userviews**

### API Endpoints

#### Users
- **GET** `/api/users` - To fetch all users  
- **GET** `/api/users/:userId` : To fetch speccific user
- **POST** `/api/users` : To add new user
- **PATCH** `/api/users` : To update existing user
- **Delete** `/api/users/:userId` : To delete existing user

#### Products
- **GET** `/api/products` - To fetch all products  
- **GET** `/api/products/:productId` : To fetch specific product
- **POST** `/api/products` : To add new product
- **PATCH** `/api/products` : To update existing product
- **Delete** `/api/products/:productId` : To delete existing product

#### UserViews
- **GET** `/api/user-views` - To fetch all user views for all products  
- **POST** `/api/user-views` : To add new user view for a product
- **GET** `/api/user-views/:productId` : To fetch analytics as per 


### Let talk more about, how to test **/api/user-views/:productID**

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=day`

##### Request:

```GET "/api/user-views/:productId?filter=day"```

##### Response:


```json
{
    "totalUsers": "6",
    "totalUniqueUsers": "2" 
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=week`

##### Request:

```GET "/api/user-views/:productId?filter=week"```

##### Response:


```json
{
    "totalUsers": "8",
    "totalUniqueUsers": "4" 
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=month`

##### Request:

```GET "/api/user-views/:productId?filter=month"```

##### Response:


```json
{
    "totalUsers": "10",
    "totalUniqueUsers": "5" 
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with custom date `startDate`, `endDate` in format `dd-mm-yyyy`

##### Request:

```GET "/api/user-views/:productId?startDate=22-10-2020&endDate=22-11-2020"```

##### Response:


```json
{
    "totalUsers": "10",
    "totalUniqueUsers": "5" 
}
```
