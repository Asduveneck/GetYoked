
## Backend

(api/)...

### Session 

| HTTP   | Route          | Function     |
|--------|----------------|--------------|
| POST   | `/session`     |              |
| DELETE | `/session`     |              |

### User


| HTTP   | Route          | Function     |
|--------|----------------|--------------|
| POST   | `/users`       | cre          |
| PATCH  | `/users/:id`   | upd          |
| GET    | `/users/:id`   | show/profile |

  * users show/profile will include `userWorkouts` AND `workouts`

### Workouts

| HTTP   | Route          | Function     |
|--------|----------------|--------------|
| GET    | `/workouts`    |              |
| GET    | `workouts/:id` |              |


* `GET /workouts`
  * ? intensity = light AND category = cardio 
  * Has query parameters
  * includes `exerciseWorkouts` & `exercises`
* `GET /workouts/:id`
  * On User show page


### Exercises

| HTTP   | Route          | Function     |
|--------|----------------|--------------|
|        |                |              |

* Intentionally blank. No routes!

## Frontend

### Splash and Session

| URL Link              | Container/Purpose                                       | Status/Type                                     |
|-----------------------|---------------------------------------------------------|-------------------------------------------------|
| `/`                   |   Splash                                                |                                                 |
| `/login`              | `<LoginFormContainer>`                                  | Auth                                            |
| `/signup`             | `<SignupFormContainer>`                                 | Auth                                            |





### Workouts

| URL Link              | Container/Purpose                                       | Status/Type                                     |
|-----------------------|---------------------------------------------------------|-------------------------------------------------|
| `/workout`            | `<WorkoutFormContainer >`                               | Protected                                       |
| `/workout/:id`        | `<WorkoutShowContainer>`                                | Protected                                       |


### Profile

| URL Link              | Container/Purpose                                       | Status/Type                                     |
|-----------------------|---------------------------------------------------------|-------------------------------------------------|
| `/profile`            | `<UserAchievement>`                                     | Protected (but any logged in person can access) |
| `/profile/user_info/` | `<UserInfo>`, `<UserEditForm>`                          | Protected (only current user can see own id)    |
| `/profile/history`    | `<UserHistory>`, `<WorkoutIndex>`, `<WorkoutIndexItem>` | Protected (only current user can see own id)    |
