/**
 *
 */
var Symbl = (function() {


    /**
     * @scope Symbl
     */
    return {

        PROJECT_NAME:       '',
        WWW_HOME_DIR:       '/',
        WWW_SCRIPT_DIR:     '/',
        REAL_PROJECT_NAME:  '/',
        GET_QUERY:          '',
        WWW_PROJECT_HOME_DIR: '',


        /**
         *
         */
        init: function(home_dir, project_name, script_dir, real_project_name, query) {

            this.WWW_HOME_DIR       = home_dir;
            this.PROJECT_NAME       = project_name;
            this.WWW_SCRIPT_DIR     = script_dir;
            this.REAL_PROJECT_NAME  = real_project_name;
            this.QUERY              = query;
            this.WWW_PROJECT_HOME_DIR  = home_dir + project_name;

        }



    }; // Symbl public

})();
