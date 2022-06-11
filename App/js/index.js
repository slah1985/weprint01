// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setName("entrer")
                .setLeft("2.272727272727273em")
                .setTop("6.363636363636363em")
                .setWidth("13.181818181818182em")
                .setHeight("3.6363636363636362em")
                .setZIndex(1002)
                .setCaption("weprint")
                .setFontSize("22px")
                .onValueChange([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.taille",
                        "args" : [true],
                        "method" : "switch"
                    },
                    "_xui_ui_button4_onvaluechange"
                ])
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.taille",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1,
                        "timeout" : 60,
                        "resetid" : "",
                        "disabled" : true
                    },
                    "_xui_ui_button4_oncontextmenu"
                ])
                .onChecked([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.taille",
                        "args" : [true],
                        "method" : "switch",
                        "timeout" : 100,
                        "resetid" : "",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#87CEFA"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel13")
                .setDock("width")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("auto")
                .setHeight("22.552380952380954em")
                .setZIndex(0)
                .setPosition("relative")
                .setCaption("Relative Panel")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when control's inner value is changed!
         * @method onValueChange [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue ,  old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _xui_ui_button4_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
        },
        /**
         * Fired when the root element's contextmenu event was fired. If returns false, the default contextmenu will be blocked(not in opera)
         * @method onContextmenu [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {Object} item , the corresponding item object
        */
        _xui_ui_button4_oncontextmenu:function(profile, e, src, item){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});