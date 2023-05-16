(function () {
    function Person(name) {
        this.name = name;
        this.show = function () {
            console.log(this.name);
        }
    }
    var person1 = new Person('person1');
    var person2 = {
        name: 'person2',
        show: person1.show
    }
    var fn = person2.show;
    fn();
})();
(function () {
    globalThis.name  = 'window'
    var person1 = {
        name: 'person1',
        show: function () {
            console.log('%c [  ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', this)
            console.log(this.name);
        }
    }
    var person2 = {
        name: 'person2',
        show: function () {
            var fn = person1.show;
            fn();
        }
    }
    person2.show(); 
})();
(function () {
    var a = 10;
    var obj = {
    a: 20,
    fn: function () {
        console.log(this.a);
    }
    }
    var test = obj.fn;
    test(); 
})();
(function () {
    var value = 1;
    var obj = {
        value: 2,
        show: function () {
            console.log(this.value);
        }
    };
    obj.show();
    var test = obj.show;
    test(); 
})();

(function() {
    function Person(name) {
        this.name = name;
        this.getName = function () {
            console.log(this.name);
        }
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    var person = new Person('Lucy');
    person.getName();
    person.setName('Lily');
    person.getName();
})();

(function() {
    var length = 10;
    function fn() {
        console.log(this.length);
    }

    var obj = {
        length: 5,
        method: function (fn) {
            fn();
            arguments[0]();
        }
    };
    obj.method(fn, 1);
})();

(function () {
    var a = {
        say: function () {
          console.log('a', this);
        }
    }
    var b = {
        say: function () {
            var func = a.say;
            func();
        }
    }
    b.say();
})();