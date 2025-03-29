function performanceEvaluation( empDetails){
  
    const task =  empDetails.filter(ele => ele.tasksCompleted > 5).sort((a, b) =>b.rating - a.rating).map(ele =>{
        let performance;
        if (ele.rating > 4.5) 
         performance = "Excellent";
        else if (ele.rating >= 3 && ele.rating <= 4.5) 
         performance = "Good";
        else 
         performance = "Needs Improvement";
    
      return { name: ele.name, performance };
    });
    console.log(task);
  }
  
  let empDetails = [
      { name: "Alice", tasksCompleted: 8, rating: 4.7 },
      { name: "Bob", tasksCompleted: 4, rating: 4.0 },
      { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
      { name: "David", tasksCompleted: 10, rating: 4.9 },
      { name: "Eve", tasksCompleted: 5, rating: 2.8 }
    ];
    performanceEvaluation(empDetails)
