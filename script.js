//var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "`", "{", "|", "}", "~" ];
//var lowercaseCharacters = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
//var uppercaseCharacters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";.split(" ");

var Password = {
 
    _pattern : /[a-zA-Z0-9_\-\+\.]/,
    
    
    _getRandomByte : function()
    {
      // http://caniuse.com/#feat=getrandomvalues
      if(window.crypto && window.crypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
      }
      else if(window.msCrypto && window.msCrypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.msCrypto.getRandomValues(result);
        return result[0];
      }
      else
      {
        return Math.floor(Math.random() * 256);
      }
    },
    
    generate : function(length)
    {
      return Array.apply(null, {'length': length})
        .map(function()
        {
          var result;
          while(true) 
          {
            result = String.fromCharCode(this._getRandomByte());
            if(this._pattern.test(result))
            {
              return result;
            }
          }        
        }, this)
        .join('');  
    }    
      
  };
  <input type='text' id='p'/><br/>
  <input type='button' value ='generate' onclick='document.getElementById("p").value = Passw
 ord.generate(16)'></input>
    