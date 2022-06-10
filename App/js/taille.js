xui.Class('App.taille', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput63")
                .setLeft("5.333333333333333em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("largeur")
                .setType("number")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput64")
                .setLeft("23.61904761904762em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("longeur")
                .setType("number")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setLeft("12.952380952380953em")
                .setTop("19.80952380952381em")
                .setWidth("14.4em")
                .setHeight("2.8190476190476192em")
                .setCaption("valider")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput73")
                .setLeft("5.333333333333333em")
                .setTop("13.714285714285714em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("materiaux")
                .setType("spin")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.DatePicker")
                .setHost(host,"xui_ui_datepicker1")
                .setLeft("10.666666666666666em")
                .setTop("25.904761904761905em")
                .setValue("2022-06-10 00:06:00")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});