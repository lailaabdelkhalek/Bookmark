var siteNameInput = document.getElementById('sitenameinput');
var siteUrlInput = document.getElementById('siteurlinput');


var webContainer ;
if(localStorage.getItem('mywebsites') !=null)
{
    webContainer = JSON.parse( localStorage.getItem('mywebsites') );
    displayWeb(webContainer);
}
else
{
    webContainer =[];
}



function addWeb ()
{
    if(validateWebName()==true && validateUrlName()==true)
    {
       var web ={
            Name:siteNameInput.value ,
            url:siteUrlInput.value 
        }
        webContainer.push(web);
        localStorage.setItem('mywebsites' ,JSON.stringify(webContainer))
  
        clearForm();
        displayWeb(webContainer)}
    
        

}

function clearForm()
{
      siteNameInput.value ="" ,
      siteUrlInput.value ="" 
}


function displayWeb (webList)
{
    var cartona = " ";
  for(var i=0 ; i<webList.length; i++)  
  {
      cartona+= `<tr>
         <td>${webList[i].Name}</td>
         <td>${webList[i].url}</td>
        <td><a id="visit" href="${webList[i].url}" target="_blank" type="button" class="btn btn-sm btn-primary">Visit</a></td>
         <td><button onclick="deleteWeb(${i})" class="btn btn-sm btn-danger">Delete</button></td>
     </tr> `
  }
  document.getElementById('tablebody').innerHTML=cartona;
}


function deleteWeb(deletedIndex)
{
   webContainer.splice(deletedIndex,1);
   localStorage.setItem('mywebsites' ,JSON.stringify(webContainer));

   displayWeb(webContainer);
}


function validateWebName()
{
  var regex=/^[A-Z a-z]{2,15}$/;
  if (regex.test(siteNameInput.value)==true)
  {
    siteNameInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    siteNameInput.classList.add('is-invalid')
    return false;
  }
}

function validateUrlName()
{
  var regex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if (regex.test(siteUrlInput.value)==true)
  {
    siteUrlInput.classList.replace('is-invalid', 'is-valid')
    return true;
  }
  else
  {
    siteUrlInput.classList.add('is-invalid')
    return false;
  }
}


