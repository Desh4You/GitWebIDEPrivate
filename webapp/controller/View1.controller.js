sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ibm.Namespace.controller.View1", {
			onInit: function() {
				//router comes from Component object of Router can get by getOwnerComponent
				this.oRouterView1 = this.getOwnerComponent().getRouter();
			},
		onNext: function(sPath){
          		alert("On Next in View1");
          		// go to COntainer COntrol and ask to Navigate to View2
          		//Step1 : Obtain the object of app container - who is parent of my current view 
          		// how to get the View Obj inside its controller this.getView() this is controller obj and geView is the view obj of controller
          		  var oApp = this.getView().getParent().getParent();
          		//Step2: ask the App container control to navigate to view2 
          		oApp.to("idView2");
          		// Navigate to detail page 
          		var oView2 = oApp.getDetailPages()[0];
          		oView2.getContent()[0].getContent()[1].bindElement(sPath);          
          },
          onDelete : function(oEvent){
          	  //Step1 Get the Item to be deleted 
          	   var oItemDelete = oEvent.getParameter("listItem");
          	   console.log("I am going to be delete " + oItemDelete.getTitle());
          	  //Step2 Get the list object 
          	  //this.getView().byId("idList"); error prone as Id might change to break app
          	    var oList = oEvent.getSource();
          	  //Step3 Remove this Item from the List object 
                oList.removeItem(oItemDelete);
                
          	
          },
          onItemPress: function(oEvent){
          	/*this.onNext();*/
          	//this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
          	var oSpath = oEvent.getParameter("listItem").getBindingContextPath();
          	var indx = oSpath.split("/")[oSpath.split("/").length - 1];
          	  this.oRouterView1.navTo("details_Nspace",{
          	  	fruitIdx : indx
          	  });
          }
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View1
		 */
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ibm.Namespace.02_fioriLikeApp_Manifests_LIST_BINDING..view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});