'use strict';

var lphelper_options = {

    saveSelection: function(id) {
        if (!document.getElementById(id).value ||
            document.getElementById(id).value === '0') {
            localStorage.removeItem(id);
        } else {
            localStorage.setItem(id, document.getElementById(id).value);
        }
    },

    loadSelection: function(id) {
        if (!localStorage.getItem(id)) {
            document.getElementById(id).value = '0';
        } else {
            document.getElementById(id).value = localStorage.getItem(id);
        }
    },

    save: function() {
        lphelper_options.saveSelection('preferPlayerStyle');
        lphelper_options.saveSelection('enableSubmitButton');
        lphelper_options.saveSelection('allowCopy');
        lphelper_options.saveSelection('blockRetreiveRes');
    },

    load: function() {
        lphelper_options.loadSelection('preferPlayerStyle');
        lphelper_options.loadSelection('enableSubmitButton');
        lphelper_options.loadSelection('allowCopy');
        lphelper_options.loadSelection('blockRetreiveRes');
    },

    reset: function() {
        localStorage.clear();
        lphelper_options.load();
    },

    init: function() {
        document.addEventListener('click', lphelper_options.save);
        document.addEventListener('keydown', lphelper_options.save);
        document.addEventListener('keyup', lphelper_options.save);
        lphelper_options.load();
    }
  
};

lphelper_options.init();

var resetButton = document.getElementById('reset-all');
resetButton.onclick = lphelper_options.reset;

