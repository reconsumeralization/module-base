
// import page interface
import { Page } from '@dashup/module';

/**
 * build address helper
 */
export default class ExamplePage extends Page {

  /**
   * returns page type
   */
  static get type() {
    // return page type label
    return 'type';
  }

  /**
   * returns page data
   */
  static get data() {
    // return page data
    return {};
  }

  /**
   * returns object of views
   */
  static get views() {
    // return object of views
    return {
      view   : '/path/to/file',
      input  : '/path/to/file',
      config : '/path/to/file',
    };
  }

  /**
   * returns category list for page
   */
  static get categories() {
    // return array of categories
    return ['frontend'];
  }

  /**
   * returns page descripton for list
   */
  static get description() {
    // return description string
    return 'Page Descripton';
  }
}