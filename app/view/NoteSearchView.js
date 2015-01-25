Ext.define("cfa.view.NoteSearchView",{

	extend: "Ext.Panel",
	requires: ["Ext.TabPanel","Ext.DataView","Ext.Panel","Ext.data.Store","Ext.form.FormPanel"],
	
	xtype: "notesearchview",

    config:{
			/*笔记搜索页面*/
			layout: "hbox",
			id:"notesearchview",
			items : [{
						xtype : 'toolbar',
						layout:'hbox',
						docked: 'top',
						cls:'note-titleBar',
						items :[
						{
							text:'返回',
							name:'notesearchBack_btn',
							cls:'backBtn-plain',
							ui: 'plain'
						}
						,{
							xtype:'textfield',
							id:'notesearch_field',
							cls:'searchField',
							placeHolder:'关键字',
							height:55,
						}
						,
						{
							xtype:'spacer'
						}
						,
						{
							text:'搜索',
							name:'notesearch_btn',
							align:'right',
							cls:'backBtn-plain',
							ui: 'plain'
						}
						]
			},{
				xtype:'list',
				id:'searchnoteList',
				name:'searchnoteList',
				width: "100%",
				itemTpl : '<div class="noteTitile">{title}</div><div class="noteDate">{year}年{month}月{day}日</div><div class="noteContent">{content}...</div>',
				// store:'NoteStore',
			}]
	}



	
});

        