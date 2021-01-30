eel.expose(view_log_js)
            function view_log_js(text){
                // reslt_write.value += text + "\n"
                // reslt_write.value.add(text + "\n")
                // reslt_write.value = reslt_write.value + text + "\n"
                // reslt_write.value = reslt_write.value + "\n"
                alert(text)
                arr.push(text);
                reslt_write.value = arr
                // reslt.add(text+"\n")
                // reslt_write.value = reslt
            }