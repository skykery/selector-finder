function getList(selector,mode){
	var newItems = []
	items = $(selector)
	for(var i = 0; i<items.length;i++){
		if (mode=="text"){
			item = $(items[i]).html()
		}
		if (mode=="url"){
			item = $(items[i]).attr("href")
		}
		newItems.push(item)
	}
	return newItems
}
