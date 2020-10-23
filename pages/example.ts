
// import page interface
import { Page } from '@dashup/module';

/**
 * build address helper
 */
export default class ExamplePage extends Page {

  /**
   * returns page type
   */
  get type() {
    // return page type label
    return 'type';
  }

  /**
   * returns page type
   */
  get icon() {
    // return page type label
    return 'fa fa-database';
  }

  /**
   * returns page data
   */
  get data() {
    // return page data
    return {};
  }

  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
      view   : 'page/example/view',
      config : 'page/example/config',
    };
  }

  /**
   * returns category list for page
   */
  get categories() {
    // return array of categories
    return ['frontend'];
  }

  /**
   * returns page descripton for list
   */
  get description() {
    // return description string
    return 'Page Descripton';
  }
}