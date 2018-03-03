# Absolute-position Centre

* knowing element width
    
    ```css
    #somelement {
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    ```
    
    ```css
    #somelement {
        width: 200px;
        position: absolute;
        left: 50%;
        margin-left: -100px
    }
    ```
    
* without knowing element width

    ```css
    #somelement {
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
    ```

