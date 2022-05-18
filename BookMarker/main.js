var siteName = document.getElementById('SiteName');
var siteUrl = document.getElementById('SiteUrl');

var sites;
if(localStorage.getItem('mySite') != null)
{
    sites =  JSON.parse(localStorage.getItem('mySite'));
  displayProduct(sites);
}
else
{
    sites = [];
}

function addSite()
{
    if (validUrl == true)
    {
        var site = 
        {
            name : siteName.value ,
            url : siteUrl.value
        }
        sites.push(site);
        localStorage.setItem('mySite' , JSON.stringify(sites));
        displaySite(sites);
        clearForm();
        console.log(site);
    }
    else
    {
        alert ('Somthing wrong please chick your Marker info')
    }
    
    
}

function clearForm()
{
    siteName.value = "";
    siteUrl.value = "";
}    

function displaySite(siteList)
{
    var containerOfSites =``;
    for(var i = 0 ; i < siteList.length ; i++)
    {
        containerOfSites += ` <table class=" text-light table">
        <thead>
            <th>No.</th>
            <th>Bookmark Name		</th>
            <th>Visit</th>
            <th>Delete</th>
    
        </thead>
        <tbody>
            <tr>
                <td>${i}</td>
                <td>${siteList[i].name}</td>
                <td><a target = "_blank" href="${siteList[i].url}"class="btn btn-primary">Visit</a></td> 
                <td><button onclick = "deleteSite(${i});" class=" btn btn-danger">Delete</button></td>
    
            </tr>
    
        
        </tbody>
    </table>`;
}
document.getElementById('tableOfSites').innerHTML = containerOfSites;
}


function deleteSite (indexOfSite)
{
    sites.splice(indexOfSite,1);
    localStorage.setItem('mySite' ,JSON.stringify(sites));
    displaySite(sites);
}

function validUrl(indexOfSite)
{
    var reg =/^(https:)/;
    if (reg.test(sites.url) == true )
    {
       return true;
    }
    else
    {
        return false;
    }

}


