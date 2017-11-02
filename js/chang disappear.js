javascript: (function() {
    var v = '1.12.0';
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement('script');
        script.src = '//code.jquery.com/jquery-' + v + '.min.js';
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                dyslexia()
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script)
    } else {
        dyslexia()
    }

    function dyslexia() {
        var getTextNodesIn = function(el) {
            return $(el).find(':not(iframe)').addBack().contents().filter(function() {
                return this.nodeType == 3
            })
        };
        var textNodes = getTextNodesIn($('p, h1, h2, h3, h4, span'));

        function isLetter(char) {
            return /^[\d]$/.test(char)
        }
        var wordsInTextNodes = [];
        for (var i = 0; i < textNodes.length; i++) {
            var node = textNodes[i];
            var words = [];
            var re = /\w+/g;
            var match;
            while ((match = re.exec(node.nodeValue)) != null) {
                var word = match[0];
                var position = match.index;
                words.push({
                    length: word.length,
                    position: position
                })
            }
            wordsInTextNodes[i] = words
        }

        function messUpWords() {
            for (var i = 0; i < textNodes.length; i++) {
                var node = textNodes[i];
                for (var j = 0; j < wordsInTextNodes[i].length; j++) {
                    if (Math.random() > 1 / 10) {
                        continue
                    }
                    var wordMeta = wordsInTextNodes[i][j];
                    var word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
                    var before = node.nodeValue.slice(0, wordMeta.position);
                    var after = node.nodeValue.slice(wordMeta.position + wordMeta.length);
                    node.nodeValue = before + messUpWord(word) + after
                }
            }
        }

        function messUpWord(word) {
            if (word.length < 3) {
                return word
            }
            return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1]
        }

        function messUpMessyPart(messyPart) {
            if (messyPart.length < 2) {
                return messyPart
            }
            var a, b;
            while (!(a < b)) {
                a = getRandomInt(0, messyPart.length - 1);
                b = getRandomInt(0, messyPart.length - 1)
            }
            return 1
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        setInterval(messUpWords, 50)
    }
})();