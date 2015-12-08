var titleFormat =
          __tooltip_format_title ? __tooltip_format_title : defaultTitleFormat,
            nameFormat = __tooltip_format_name ? __tooltip_format_name : function (name) { return name; },
            valueFormat = __tooltip_format_value ? __tooltip_format_value : defaultValueFormat,
            text, i, title, value, name, bgcolor;
        for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

            if (! text) {
                title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
            }

            name = nameFormat(d[i].name);
            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
            bgcolor = levelColor ? levelColor(d[i].value) : color(d[i].id);

            text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
            text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
            text += "<td class='value'>" + value + "</td>";
            text += "</tr>";

tooltip: {
      contents: function (data, defaultTitleFormat, defaultValueFormat, color) {
        var $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;

            for (i = 0; i < data.length; i++) {
                if (! (data[i] && (data[i].value || data[i].value === 0))) { continue; }

                if (! text) {
                  title = titleFormat ? titleFormat(data[i].x) : data[i].x;
                  text = "<div id='tooltip' class='d3-tip'>";
                }
                name = nameFormat(data[i].name);
                value = valueFormat(data[i].value, data[i].ratio, data[i].id, data[i].index);

                text += "<span class='info'>"+ name +"</span><br>";
                text += "<span class='info'>"+ title +"</span><br>";
                text += "<span class='value'>" + value + " g/km</span>";
                text += "</div>";
            }

        return text;
    }
},