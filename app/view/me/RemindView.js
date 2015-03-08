Ext.define("cfa.view.me.RemindView",{

	extend: "Ext.Container",
	requires: ["Ext.TabPanel","Ext.Panel","Ext.field.Toggle","Ext.picker.Picker","cfa.view.me.MuteTimeView"],
	
	xtype: "remindview",
	config:{
			/*提醒页面*/
			layout: "vbox",
			width: "100%",
			height:'100%',
			fullscreen: true,
			// showAnimation:'pop',
			hideAnimation:'popOut',
			// scrollable:'vertical',
			default:{
				styleHtmlContent:true,
			},
			items: [
			{
				xtype: "toolbar",
				title: "提醒", 
				docked: "top",
				items:[{
					html:'返回',
					name:'backToSetingBtn',
					ui:'plain',
				}],
			},{//生理记录提醒
				xtype:'panel',
				margin:'20 0 0 0',
				cls:'togglePanel',
				items:[{
					xtype:'togglefield',
					label:'生理记录提醒',
					labelWidth:'60%',
					width:'100%',
					height:40,
					cls:'toggle',
					labelCls:'backLabel',
					// name:'remindBtn',
					ui: 'plain',
				}]
				
			},{//药品到期提醒
				xtype:'panel',
				cls:'togglePanel',
				items:[{
					xtype:'togglefield',
					label:'药品到期提醒',
					labelWidth:'60%',
					width:'100%',
					height:40,
					cls:'toggle',
					labelCls:'backLabel',
					// name:'remindBtn',
					ui: 'plain',
				}]
			},{//疫苗接种提醒
				xtype:'panel',
				cls:'togglePanel',
				items:[{
					xtype:'togglefield',
					label:'疫苗接种提醒',
					labelWidth:'60%',
					width:'100%',
					height:40,
					cls:'toggle',
					labelCls:'backLabel',
					// name:'remindBtn',
					ui: 'plain',
				}]
			},{//提醒声音
				xtype:'panel',
				margin:'20 0 0 0',
				cls:'togglePanel',
				items:[{
					xtype:'togglefield',
					label:'提醒声音',
					labelWidth:'60%',
					width:'100%',
					height:40,
					cls:'toggle',
					labelCls:'backLabel',
					// name:'remindBtn',
					ui: 'plain',
				}]
			},{//静音时间段
				xtype:'button',
				name:'muteBtn',
				cls:'psnMenu psninfMenu',
				ui: 'plain',
				html:['<div class="psnInfItem"><div class="psnInfItemTitle">静音时间段</div><div class="psnInfcontent">23:00-8:30</div></div>']
			}],
	}
});