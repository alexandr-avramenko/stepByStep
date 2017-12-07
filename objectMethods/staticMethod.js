function Article() {
    this.created = new Date();
    Article.lastCreated = Article.formatDate(this.created);
    Article.count++;
}

Article.count = 0;

Article.formatDate = function (date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
};

Article.showStat = function () {
    alert ('Всего: ' + Article.count + ', ' + 'последняя: ' + Article.lastCreated);
};

new Article();
new Article();

Article.showStat();

new Article();
Article.showStat();