sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ibm.Namespace.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View2
		 */
			onInit: function() {
				//router comes from Component object of Router can get by getOwnerComponent
			 this.oRouter = this.getOwnerComponent().getRouter();	
			 //everytime routePatternMatched is called then hercules will be called
			 this.oRouter.attachRoutePatternMatched(this.hercules,this);
			},
			hercules: function(oEvent){
				debugger;
				var id  = oEvent.getParameter("arguments").fruitIdx;
				var sPath = "/fruits/" + id ;  //address of fruit which was selected 
				this.getView().bindElement(sPath);
			},
		 onBack: function(){
			alert("On Back triggered");
			// go to mama and ask to navigate to View1
			//Step1 Get the container control object using the ViewControllers View object parent
			   var oApp = this.getView().getParent();
			// Step2 ask the Container control to Navigate to View1
			   oApp.to("idView1");
		},
		flag : true,
		onHide: function(oEvent){
			var oTable = this.getView().byId("idTabCntrl");
		    var oCols = oTable.getColumns();
		    var oCity = oCols[2];
		    //oCity.setVisible(false);
		    if(this.flag===true){
		    	oCity.setVisible(false);
		    	oEvent.getSource().setText("Show");
		    	this.flag = false; 
		    }
		    else{
		    	oCity.setVisible(false);
		    	oEvent.getSource().setText("Hide");
		    	this.flag = true;
		    }
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});