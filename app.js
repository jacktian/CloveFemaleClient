//<debug>
Ext.Loader.setPath({
	'Ext': 'lib/src'
});
//</debug>
Ext.application({

	name: "cfa",
		
	
	requires: ['Ext.MessageBox', 'cfa.view.ColorPatterns', 'Ext.util.HashMap'],


	controllers: ["MainAction", "RecordAction", "kid.KidAction", "preg.PregnantAction", "note.NotebookAction", "note.NewNoteAction", "note.NoteSearchAction", "note.NoteSearchDetailAction",
		"note.NoteDetailAction", "cfa.controller.medicine.MedicineAction", "cfa.controller.medicine.MedicineListAction", "chart.ChartAction", "chart.CustomizeDateAction", "PersonalAction",
		"me.PsnInfAction", "me.SettingAction", "me.AboutAction", "me.RemindAction", "me.MuteTimeAction", "me.PrivacyAction", "me.AccountAction", "me.LoginAction",
		"me.RegisterAction","lock.LockAction"
	],

	views: ["MainView",
		"chart.CustomizeDateView", "chart.BarChartBabyMove", "chart.BarChartGrade", "chart.BarChartTemp",
		"chart.LineChartBabyMove", "chart.LineChartGesWeight", "chart.LineChartGrade",
		"chart.LineChartHeight", "chart.LineChartTemp", "chart.PieChartBabyMove", "chart.PieChartGrade",
		"chart.PieChartTemp", "lock.DialLocker", "lock.DialLockerComponent", "me.LoginView","me.RegisterView",
		"TipsPanel",
	],
	models: ["NoteModel", "NoteGroupModel", "SimpleNoteBookModel", "NoteDetailModel", "RecordModel"],

	stores: ["NoteStore", "NoteGroupStore", "SimpleNoteBookStore", "NoteDetailStore", "NoteSearchDetailStore", "NbMenuStore",
		"chart.ChartStore", "chart.LineBabyMoveStore", "chart.LineGesWeightStore",
		"chart.LineGradeStore", "chart.LineHeightStore", "chart.LineTempStore", "chart.PieBabyMoveStore",
		"chart.PieGradeStore", "chart.PieTempStore", "chart.ChartSubjectsStore", "medicine.medBoxStore", "medicine.medDetailStore", "medicine.medSingleStore","preg.pregDetailStore"
	],


	launch: function() {
		Ext.Viewport.add({
			xtype: "mainview"
		});


	}
});