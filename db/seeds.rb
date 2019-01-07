user_arr = [
  {email: "test@test0.com", password: "password", nickname: "test0"},
  {email: "test@test1.com", password: "password", nickname: "test1"},
  {email: "test@test2.com", password: "password", nickname: "test2"},
  {email: "test@test3.com", password: "password", nickname: "test3"},
  {email: "test@test4.com", password: "password", nickname: "test4"},
  {email: "test@test5.com", password: "password", nickname: "test5"} 
]

user_arr.each do |user|
  u = User.create(
    email: user.email,
    nickname: user.nickname,
    passwor: user.password
  )
  10.times do
    u.posts.create (
      title: Faker::TwinPeaks.quote,
      body: Faker::Hipster.paragraph
    )
  end
end

puts "seeded"
