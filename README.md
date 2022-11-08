# Global-Bank-Admin-Management
Capstone Batch 1 Project 1

@GetMapping("/login")  
Request Body: user : { username, password }  
return boolean  

@GetMapping("/admin/customers")   
return List<Customer>;   

@GetMapping("/admin/branches")   
return List<Branch>;   

@PostMapping("/admin/customers/account") // same for updating account   
Request Body: account_master    
return boolean   

@PostMapping("/admin/branches") // same for updating branch   
Request Body: branch_master   
return boolean   

@DeleteMapping("/admin/customers/account/{account_no}")   
return account_master;   

@DeleteMapping("/admin/branches/{branch_id}")   
return branch_master;   
