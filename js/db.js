function add(){
  var request = db.transaction(["employee"],"readwrite").objectStore("employee").add({id:"01",name:"a",email:"aaa@gmail.com"});
  request.onsuccess = function(event){ alert("data has been added to your database");};
  request.onerror = function(event){ alert("unable to add data \r\n data already exist in the database");};
}

function read(){
  var request = db.transaction(["employee"]).objectStore("employee").get("00-03");
  request.onerror = function(event){ alert('unable to read data from database');};
  request.onsucces= function(event){ 
    if (request.reseult) {
      alert('name:'+request.result.name + ",email:"+request.result.email);
    }
    else {
      alert('00-03 not found in database');
    }
  };
  
  /*
    var transaction = db.transaction(["employee"]);
   var objectStore = transaction.objectStore("employee");
   var request = objectStore.get("00-03");
   */
}

function remove(){
  var request = db.transction(["employee"],"readwrite").objectStore("employee").delete("02");
  request.onsuccess = function(event){ alert("data has been removed from your database");};
  request.onerror =  function(event){ alert("fail to remove 02 from your database");};
}
