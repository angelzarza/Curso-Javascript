function ver(dato) {
  document.write(dato);
}

ver("TITULO DEL DOCUMENTO: <BR>");
    ver(document.title); ver(" ==>document.title<BR>");
    ver(document["title"]); ver(" ==>document[\"title\"]<BR>");
    ver(this.document.title); ver(" ==>this.document.title<BR>");
    ver("URL del DOCUMENTO: <BR>");
    ver(window.location);


