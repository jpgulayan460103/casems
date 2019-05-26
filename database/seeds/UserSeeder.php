<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'full_name' => 'admin',
            'username' => 'admin',
            'role' => 'admin',
            'password' => bcrypt('admin'),
        ]);
    }
}
