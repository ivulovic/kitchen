# LIPSTER

## __Design Idea__

UI should be simple, something like [this design](https://cdn.dribbble.com/users/1407879/screenshots/7572171/media/6743d2b6d4d7439c0226b1d42aa2a18a.png).



## __Home Page__

On the Home page users will be able to view overview of the current day.

### Delivery Section

- Apply as delivery person for stores
    - Select which store you are delivering from
        - All 
        - By selecting custom stores

- If delivery person is already applied then you can join them
- If delivery person is already applied you can see it in realtime
- If delivery person is you then you can notify others you went to take the meals

### Orders Section

- See list of orders for current day
    - User
    - Meal
    - Quantity
    - Price
    - Actions: 
        - Cancel or Edit 
        - if DeliveryGuy "Mark As Viewed"

- See sum of everything at the end


## __Kitchen Page__

On this page users will be able to see meals they can order for choosen kitchen.

### Meals section

- See what's on todays menu
- See other meals on the list
- Select meals you wanna eat
    - Choose quantity
    - Choose if it should be delivered or just reserved in restaurant

---

## __Technology__

ReactJS + NodeJS + MongoDB

User actions are synced accros tabs using SharedWorker.

Actions of other users are auto synced via websocket.

## __Database__

### __stores__
- id: UUID
- name: string
- description: string
- menu: Array [ MenuID ]

### __menu__
- id: UUID
- storeId: StoreID
- name: string
- description: string
- imageUrl: string


### __users__
- id: UUID
- username: string
- password: string SHA256
- firstName: string
- lastName: string
- orders: Array [ OrderID ]

### __orders__
- id: UUID
- orderId: OrderID
- userId: UserID
- date: Date