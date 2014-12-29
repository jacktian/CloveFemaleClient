Ext.define("cfa.store.chart.ChartStore", {
	extend: "Ext.data.Store",

    requires: ['Ext.data.proxy.JsonP','Ext.util.HashMap'],

    config:{
        fields: [],
        data : [],
        map : Ext.create('Ext.util.HashMap'),
        index : 0 ,
	    proxy: {
	        type: 'jsonp',
	        url : domain + 'ChartTest/getSomeData2',
	        extraParams:{
	        	'whoami':'I\'m ChartStore',
	        	'name':'i am name',
	        	'startDate':'2014-01-01'
	        }
	    }
    },

    getParams: function(){
    	var params = this.getProxy().getExtraParams() ;
    	// console.log(params) ;
    	return params ;
    },


    loadNewData: function(params){
        window.changeDateByIndex() ;
        // if(this.getMap().containsKey(window.dateIndex)){
        //     this.setData(this.getMap().get(window.dateIndex)) ;
        // }else{
        //     this.getProxy().setExtraParams(params) ;
        //     this.getMap().add(window.dateIndex, this.getData().all) ;
        //     this.load() ;
        // }
        this.load() ;
    },

});