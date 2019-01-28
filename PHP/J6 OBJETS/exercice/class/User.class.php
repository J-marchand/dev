<?php

class User 
{
    public function addUser($post)
    {
        $hashPwd = $this->hashPassword($post['password']);

        $data = new Database();
        $data->queryTwo(
                        'INSERT INTO 
                            `users`(`mail`, `password`, `firstname`, `lastname`, `age`) 
                        VALUES 
                            (?, ?, ?, ?, ?)',
                        [
                        $post['email'],
                        $hashPwd,
                        $post['firstName'],
                        $post['lastName'],
                        $post['age']
                        ]
                        );
        header('location: login.php');
            exit();
    }

    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);
        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
    }
    

    public function loginUser($post) {

        $data = new Database();
        $user = $data->queryOne(
                        'SELECT 
                            * 
                        FROM 
                            users 
                        WHERE 
                            mail= ?',
                        [
                            $post['email']
                        ]
                    );

        var_dump($user);
        $verifPwd = $this->verifyPassword($post['password'], $user['password']);
    
        if($verifPwd == true) {
            
            $_SESSION['email']      = $user['mail'];
            $_SESSION['password']   = $user['password'];
            $_SESSION['firstName']  = $user['firstname'];
            $_SESSION['lastName']   = $user['lastname'];
            $_SESSION['pseudo']     = $user['age'];

            header('location: index.php');
            exit();

        }

    }
    
    public function forgotPassword($post){

        $data = Database();
        $user = $data->query(
                            'SELECT 
                                * 
                            FROM 
                                users 
                            WHERE 
                                mail= ?',
                            [
                                $post['email']
                            ]
                        );

        if($user == true){
            
            var_dump('Coucou');
        }
    }
}

?>