var group = "%vault_rankprefix%";

function check() {

   if (group === "default") {
       return "&7Нет";
   }
   
   else {
       return "%vault_prefix%";
   }
}
check();