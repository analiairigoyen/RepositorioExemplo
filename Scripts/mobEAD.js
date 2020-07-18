/// <reference path="../Kickstrap/js/jquery-1.8.3.min.js" />
/// <reference path="mobEAD.dataAccess.js" />

(function () {

    function Test(data) {
        var self = this;

        self.Id = data.Id;
        self.ExamId = data.ExamId;
        self.UserId = data.UserId;
        self.Exam = data.Exam;
        self.QuestionsAmount = data.QuestionsAmount;
        self.CurrentQuestion = ko.observable(data.CurrentQuestion); //Current question number, not the entity itself!
        self.MinCorrectAmount = data.MinCorrectAmount;
        self.ActualCorrectAmount = ko.observable(data.ActualCorrectAmount);
        self.ExamTime = data.ExamTime;
        self.ElapsedTime = ko.observable(data.ElapsedTime);
        self.Result = ko.observable(data.Result);

        self.Questions = ko.observableArray();

        self.ShowResult = ko.observable(false);

        //Computed
        self.Question = ko.computed({
            read: function () {
                var index = 0;
                index = self.CurrentQuestion();
                return self.Questions()[index];
            },
            owner: this
        });

        //Behaviour
        self.nextQuestion = function () {
            self.ShowResult(null);
            var cur = self.CurrentQuestion();
            if (cur < self.QuestionsAmount)
                self.CurrentQuestion(cur + 1);
        };

        self.previousQuestion = function () {
            if (self.ShowResult()) {
                self.ShowResult(false);
                self.CurrentQuestion(0);
            }
            var cur = self.CurrentQuestion();
            if (cur > 0)
                self.CurrentQuestion(cur - 1);
        };

        self.endTest = function (val) {
            self.ActualCorrectAmount(0);

            self.Questions().forEach(function (data) {
                if (data.NumberAnswered() == data.CorrectAlternativeNumber) {
                    data.Correct(true);
                    self.ActualCorrectAmount(self.ActualCorrectAmount() + 1);
                }
            }, this);

            if (self.ActualCorrectAmount() >= self.MinCorrectAmount)
                self.Result(true);
            else
                self.Result(false);

            self.ShowResult(true);
        }

        self.Questions($.map(data.Questions || [], function (list) {
            return new Question(list);
        }));
    }

    function Question(data) {
        var self = this;

        self.Id = data.Id;
        self.TestId = data.TestId;
        self.FormulationId = data.FormulationId;
        self.QuestionNumber = data.QuestionNumber;
        self.Formulation = data.Formulation;
        self.AlternativeOne = data.AlternativeOne;
        self.AlternativeTwo = data.AlternativeTwo;
        self.AlternativeThree = data.AlternativeThree;
        self.AlternativeFour = data.AlternativeFour;
        self.CorrectAlternativeNumber = data.CorrectAlternativeNumber;
        self.NumberAnswered = ko.observable(data.NumberAnswered);
        self.Correct = ko.observable(data.Correct);
        self.Tagged = ko.observable(data.Tagged);

        //Behaviour
        self.selectAlternative = function (id) {
            if (self.NumberAnswered() == id)
                self.NumberAnswered(0);
            else
                self.NumberAnswered(id);
        }
    }

    function MobEADViewModel() {
        var self = this;

        self.Tests = ko.observableArray();
        self.CurrentTest = ko.observable(null);

        //Behaviour
        self.openTestList = function () {
            self.CurrentTest(null);
        };

        self.selectTest = function (data) {
            self.CurrentTest(data);
            self.CurrentTest().CurrentQuestion(0);
            self.CurrentTest().ShowResult(false);
        }

        // Load initial state from server, convert it to Test instances, then populate self.Tests
        var mappedTests = $.map(MobEADApp.Db.getMockArray(), function (test) {
            return new Test(test);
        });

        self.Tests(mappedTests);
        self.CurrentTest(null);
    }

    // Initiate the Knockout bindings
    ko.applyBindings(new MobEADViewModel());

})();