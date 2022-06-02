<!DOCTYPE html>
<html>
<head>
<style>
body {
    margin: 10 !important;
    padding: 10;
    color: #484848;
    display: table-cell;
    vertical-align: middle;
}
table {
    border-spacing: 0;
    font-family: sans-serif, arial;
    color: #484848;
}

html, body {
    height: 50%;
    width: 70%;
}

html {
    display: table;
    margin: auto;
}

.submitbuttonactive {
  background-color: #7FFFD4;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.submitbutton {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

input[type=text], input[type=password], input[type=number], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.DateInput_input{
  width: 100%;
  padding: 12px 5px !important;
  margin: 8px 0 !important;
  display: inline-block;
  border: 0px solid #ccc !important;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

#players {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#players td, #players th {
  border: 1px solid #ddd;
  padding: 8px;
}

#players tr:nth-child(even){background-color: #f2f2f2;}

#players tr:hover {background-color: #ddd;}

#players th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

#display-error
{
  width: 400px;
  border: 1px solid #D8D8D8;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #ff9999;
  color: rgb(211, 0, 0);
  text-align: center;
}
 
img
{
float: left;
}
 
#display-success
{
  width: 400px;
  border: 1px solid #D8D8D8;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial;
  font-size: 11px;
  text-transform: uppercase;
  background-color: rgb(236, 255, 216);
  color: green;
  text-align: center;
  margin-top: 30px;
}
 
#display-success img
{
position: relative;
bottom: 5px;
}

</style>
</head>