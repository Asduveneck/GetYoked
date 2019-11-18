### Sample Slice of State

```javascript
sampleSlice = {
  entities: {
    users: {
      id: 1,
      username: "Rick",
      height: "78",
      weight: "240",
      activity_level: 3,
      fitness_goal: "SK",
      ach_level: 0,
      active_since: Date.now
    },
    workouts: {
      id: 1,
      name: "push",
      type: "weight",
      intensity: 2,
      description: "push weights HARD"
    },
    exercises: {
      id: 1,
      name: "Military Press",
      description: "Barbell Shoulder Press",
      duration: null,
      sets: 5,
      reps: 5,
    },
    // JOINS
    userWorkouts: {
      1: {
        id: 1,
        userId: 4,
        workoutId: 3,
        dateCompleted: Date.now,
      }
    },
    exerciseWorkouts: {
      2: {
        id: 5,
        exerciseId: 4,
        workoutId:  4
      }
    }
  }, // end of entities
  errors: {
    session: [],
    user: []
  },
  session: {
    currentUserId: 1
  }
}
```