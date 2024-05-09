let group = {
    title: "OurGroup",
    students: ["John", "Pete", "Alice"],
    showList: function () {
       
        this.students.forEach( (student) =>
            //error–‘this’isundefined(orwindow)
            console.log(this.title + ":" + student)
        );
    }
};

let result=group.showList.bind(group);
result();