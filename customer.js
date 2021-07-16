var CustomerModule = (
    function (){
        function Customer(){

            var name = "";
            var address = "";
            var amount = 0;

            function _setName(_name){
                 name = _name;
            }
            function _getName(){
                return name;
            }
            function _setAddress(_address){
                address = _address
            }
            function _getAddress(){
                return address;
            }
            function _setAmount(_amount){
                amount = _amount
            }
            function _getAmount(){
                return amount;
            }
            return{
                setName: _setName,
                getName: _getName,
                setAddress: _setAddress,
                getAddress: _getAddress,
                setAmount: _setAmount,
                getAmount: _getAmount
            }
        }
        return{
            Customer
        }
    }
)
();
    
