<html>

<head>

<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Ket qua tim kiem theo ten de tai</title>
</head>

<body>
<!--#include file="ketnoi.inc"-->
<% 
tukhoa = Trim(Request.QueryString("tukhoa"))
sql = "Select * From tbldetai  where tendetai LIKE '%"&tukhoa&"%' "
Set rs = cn.Execute(sql)
if not rs.eof then
do while not rs.eof%>
<table border="0" width="100%">
	<tr>
		<td><img src="HINH%20ANH/anh4.gif" width="50" height=50></td></td>
		<a href="<%=rs("URL")%>"><td valign=top>  
		<font size=1 ><b> <%=rs("tendetai")%></b></font></a>
  <br><font size=1 > <%=rs("tomtat")%></font>
</td>
	</tr>
	 <% rs.movenext
loop
else%> Không tìm thấy
<%end if%>

<%=request.form("tukhoa")%>
</table>
</body>

</html>
