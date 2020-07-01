sap.ui.define(
	["sap/ui/core/UIComponent"],
		function(xtend){
		return xtend.extend("ibm.Namespace.Component",{
			metadata: {
				"manifest":"json"
			},
			init: function(){
				//we have to call the Super class constructor 
				//super->constructor();
				//in child class we need to call Base class UIComponent to activate default functionality 
				xtend.prototype.init.apply(this);
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			/*createContent: function(){
				/*	return new sap.m.Button({
					text:"This is Button From COMPONENT JS"
				});
				var oViewApp = new sap.ui.view({
					viewName:"ibm.Namespace.view.App",
					id:"idSplitApp",
					type:"XML"
				});
				var Oview1 = new sap.ui.view({
					  viewName:"ibm.Namespace.view.View1",
					  id:"idView1",
					  type:"XML"
				});
				var oView2 = new sap.ui.view({
					viewName:"ibm.Namespace.view.View2",
					id:"idView2",
					 type: "XML"
				});
				oViewApp.byId("idSplitApp").addMasterPage(Oview1).addDetailPage(oView2);
				return oViewApp;
			},*/
			destroy: function(){}
		});
		});