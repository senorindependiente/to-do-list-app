


//function to add new item with click on button, strike addes items //out and remove added items completely
function newItem() {
    // selecting all elements and assign variable 
      let toDolist = $(".toDolist");
      let inputValue = $("#input").val();
      let btn = $("#button");
      let list = $("#list");
      //creating element and assign a variable 
      let listItem = $("<li></li>");
    //append the newly created element "li"
      list.append(listItem)
    
      //append the value that was was put in the bar as a new list item
      listItem.append(inputValue)
    //if the value bar is empty alert message will execute
      if (inputValue === "") {
        alert("You must write something!")
      }
    // if value was entered new list item will be added
      else { list.append(listItem) }
    //setting the value bar to zero each time an item has been added
    inputValue = $("#input").val("")
    
    //create new element "crossOutButton"
      let crossOutButton = $(document.createElement('crossOutButton'))
    //create an "X" inside this new element
      crossOutButton.append(document.createTextNode('X'));
    //append it to the list item
      listItem.append(crossOutButton)
    
    //the close button will delete list item on click 
      crossOutButton.on("click", function () {
    
        listItem.addClass("delete");
      });
    
    //when clicking on the list item description, it will trike it out
      listItem.on("click", function () {
    //toggles between addindg and removing the css class "strike"
        listItem.toggleClass("strike");
      });
    
    //add functionality (built in with jquery) to sort item list by dragging
      $(function () {
        list.sortable();
      });
    
    }
    
    