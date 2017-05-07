# Soup.io Enhancement
This repository contains enhancements for soup.io. It is considered to be a git submodule for soupstats. 

If you want to use any of the CSS ore JavaScript on your soup.io profile feel free to do so. But it's recommended to use the code generator at 
[soupstats.io/soup-enhancement](http://soupstats.io/soup-enhancement).

# Contribute
Contribution is simple, just fort the repository add a folder. Simply add your html, css, js files to this folder 
And finally add JSON file with all meta data.
 
JSON examples can be found in the existing enhancements.

##JSON Properties

<table>
    <tr>
        <th>Propertie</th>
        <th>Required</th>
        <th>Type</th>
        <th>example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>name</strong></td>
        <td>yes</td>
        <td>String</td>
        <td>"name": "Awesome enhancement"</td>
        <td>Short clear title of the enhancement.</td>
    </tr>
    <tr>
        <td><strong>description</strong></td>
        <td>yes</td>
        <td>String</td>
        <td>"description": "This enhancement does nothing in particular, but it makes your soup more awesome"</td>
        <td>Fully description what this enhancement is good for.</td>
    </tr>
    <tr>
        <td><strong>category</strong></td>
        <td>yes</td>
        <td>String[]</td>
        <td>"category": [ "fun", "avatars" ]</td>
        <td>Think about how you would categorise your enhancement and write these categories in a String
        array.</td>
    </tr>
    <tr>
        <td><strong>files</strong></td>
        <td>yes</td>
        <td>JSON wit String[]</td>
        <td>```JSON
        { "js": [ 'file-01.js', 'file-02.js' ],
        "css": [ 'my_style.css' ]
        ```
        </td>
        <td>A JSON file which includes a list af all needed files of the enhancement sorted by type.</td>
    </tr>
    <tr>
        <td><strong>recommendedEnhancements</strong></td>
        <td>no</td>
        <td>String[]</td>
        <td>"recommendedEnhancements": [ 'video-mute', 'video-autoplay' ]</td>
        <td>Recommend other enhancements if the would complement your enhancement.</td>
    </tr>    
    <tr>
        <td><strong>initEvent</strong></td>
        <td>only for javascript enhancements like 'video-autoplay'</td>
        <td>String</td>
        <td>"initEvent": "DOMContentLoaded"</td>
        <td>Most likely it will be the 'DOMContentLoaded' event, but it can be any other javascript event where a
        eventListener can be added by ```document.addEventListener( "DOMContentLoaded", function )```.</td>
    </tr>
    <tr>
        <td><strong>initCall</strong></td>
        <td>only for javascript enhancements like 'video-autoplay'</td>
        <td>String</td>
        <td>"initCall": "soupENH_awesomeFunctionName</td>
        <td>Contains the name of the function which acts as entry point for your enhancement. This function will be called
        by the event set in 'initEvent'.</td>
    </tr>
    <tr>
        <td><strong>appendOn</strong></td>
        <td>only for html enhancements like 'search-box'</td>
        <td>String</td>
        <td>"appendOn": "body"</td>
        <td>The html tag name on which the html enhancement will be appended. If there are more then one tage of this 
        type, the first one will be used.</td>
    </tr>
</table>

If there are properties that are not required for an enhancement you can set them to null or drop them at all.