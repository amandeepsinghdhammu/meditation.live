# meditation.live
A test task to fetch data from a mongodb collection(**UserView**) using **daily/weekly/monthly/CustomDate** filter. 

To achieve this task, I've created **CRUD** for below collections. Major end point is `/api/user-views/stats/:productId`, which will produce the desired output.

### Tested Dependencies
- NodeJs >= 12.18.3
- Mongo >= 4.4.2

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
- **GET** `/api/user-views/stats/:productId` : To fetch analytics as per product


### Lets talk more about, how to test **/api/user-views/stats/:productID**

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=day`

##### Request:

```GET "/api/user-views/stats/:productId?filter=day"```

##### Response:


```json
{
    "totalUsers": "6",
    "totalUniqueUsers": "2",
    "filterBy": "day" 
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=week`

##### Request:

```GET "/api/user-views/stats/:productId?filter=week"```

##### Response:


```json
{
    "totalUsers": "8",
    "totalUniqueUsers": "4",
    "filterBy": "week"
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with `filter=month`

##### Request:

```GET "/api/user-views/stats/:productId?filter=month"```

##### Response:


```json
{
    "totalUsers": "10",
    "totalUniqueUsers": "5",
    "filterBy": "month"
}
```

- To fetch `totalUsers` and `totalUniqueUsers` as per `productId` with custom date `startDate`, `endDate` in format `yyyy-mm-dd`

##### Request:

```GET "/api/user-views/stats/:productId?startDate=2020-10-22&endDate=2020-11-22"```

##### Response:


```json
{
    "totalUsers": "10",
    "totalUniqueUsers": "5",
    "filterBy": "date"
}
```
