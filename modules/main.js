import 'bootstrap/css/bootstrap.css!';
import 'content/site.css!css';
import $ from 'jquery';
import 'bootstrap/js/bootstrap.js';
import walah from 'modules/walah.html!text';
import * as dwg from 'modules/drawing'

$(function () {
    $('body').append(walah);
    var grid = new dwg.XYGrid(400, 20);
    grid.draw('body');
});
