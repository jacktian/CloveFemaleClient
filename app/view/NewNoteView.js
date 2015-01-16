Ext.define("cfa.view.NewNoteView",{

	extend: "Ext.Panel",
	requires: ["Ext.TabPanel","Ext.DataView","Ext.Panel","Ext.data.Store",
			  "Ext.form.FormPanel","Ext.field.Select"],
	
	xtype: "newnoteview",

    config:{
		// 随手记添加笔记页面
		layout:{
				type:'vbox',
				align:'stretch',
				// pack:'justify'
			},
		items:[{
			xtype:'panel',
			id:'noteForm',
			name:'noteForm',
			url:'http://localhost:9000/RandomNote/addNote2',
			id:'noteForm',
			width:'100%',
			height:'100%',
			layout:{
				type:'vbox',
				align:'stretch',
				// pack:'justify'
			},
			// baseCls:'note-form',
			items:[
				{
				xtype:'titlebar',
				title:'添加笔记',
				docked:'top',
				cls:'note-titleBar',
				items:[{
					text:'返回',
					name:'newnote_back_btn',
					cls:'backBtn-plain',
					ui: 'plain'
				},
				{
					text:'保存',
					xtype:'button',
					id:'newnote_save_btn',
					name:'newnote_save_btn',
					align: 'right',
					cls:'backBtn-plain',
					ui: 'plain'
				}]
			},
			{
				xtype:'panel',
				cls:'testPanel', 
				items:[{
					xtype:'textfield',
					id:'noteTitle',
					name:'noteTitle',
					placeHolder:'标题',
					clearIncon:false,
				}]				
			}
			,{
				flex:1,
				xtype:'textareafield',
				id:'noteContent',
				name:'noteContent',
				placeHolder:'内容',
				clearIcon:false,
				baseCls:'textarea-note'
			}
			,{
				xtype:'panel',
				docked:'bottom',
				layout:'hbox',
				height:50,
				items:[{
					xtype:'panel',
					cls:'note-builddate',
					layout:'hbox',
					items:[
					{
						html:'创建日期:&nbsp;',		
					},{
						id:'note-dateText',
						html:'',
					}
					]
				},
				{
					xtype:'spacer',
					cls:'spacer'
				},
				{
					xtype:'selectfield',
					id:'noteGroup',
					name:'noteGroup',
					docked:'right',
					cls:'note-blong',
					store:'SimpleNoteBookStore',
					valueField:'id',
					displayField:'name',	
					placeHolder:'默认笔记本',		
				}
				]
			},{
				id:'newgroupModal',
				xtype:'panel',
				layout: "vbox",
				modal:true,
				hidden:true,
				hideOnMaskTap:true,
				centered:true,
				height:'60%',
				width:'90%',
				items:[{
					xtype:'panel',
					cls:'modalPanel',
					html:'添加笔记本'	
				},{
					xtype:'formpanel',
					id:'healthForm',
					name:'healthForm',
					scrollable:'vertical',
					items:[
					{
						xtype:'fieldset',
						defaults:{
						labelwidth:'20%'
						},
						items:[
						{
							xtype:'textfield',
							id:'noteBookName',
							name:'noteBookName',
							label:'名称',
							placeHolder:'输入笔记本名称',
							clearIcon:true,
							disabled:false
						},{
							xtype:'textfield',
							id:'shortName',
							name:'shortName',
							label:'简称',
							placeHolder:'输入一个字简称',
							clearIcon:true,
							disabled:false
						}
						]
						},{
							xtype:'panel',
							id:'newGroupTips',
							cls:'noteTips',
							items:[{
								id:'existTips',
								hidden:true,
								html:"此笔记本已经存在！请更换名称"	
							},{
								id:'notNullTips',
								hidden:true,
								html:"笔记本名称或者简称不能为空！"
							}]
						},{
						xtype:'panel',
						docked: "bottom",
						layout:{
							type:'hbox',
							pack:'end'
						},
						defaults:{
							xtype:'button'
						},
						items:[
							{
								cls:'subBtn',
								text:'确定',
								id:'group_add_btn',
								name:'noteBook_add_btn',
							},{
								cls:'resetBtn',
								id:'cancelBtn',
								name:'noteBook_cancel_btn',
								text:'取消',
							}
							]
						}]
				}]
			}
			]
			
		}]
	}
	
});

        