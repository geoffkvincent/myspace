user_arr = [
  {email: "test@test0.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test0"},
  {email: "test@test1.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test1"},
  {email: "test@test2.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test2"},
  {email: "test@test3.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test3"},
  {email: "test@test4.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test4"},
  {email: "test@test5.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test5"},
  {email: "test@test6.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test6"},
  {email: "test@test7.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test7"},
  {email: "test@test8.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test8"},
  {email: "test@test9.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test9"},
  {email: "test@test10.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test10"},
  {email: "test@test11.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test11"},
  {email: "test@test12.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test12"},
  {email: "test@test13.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test13"},
  {email: "test@test14.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test14"},
  {email: "test@test15.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test15"},
  {email: "test@test16.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test16"},
  {email: "test@test17.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test17"},
  {email: "test@test18.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test18"},
  {email: "test@test19.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test19"},
  {email: "test@test20.com", password: "password", name: Faker::Name.name, image: Faker::Avatar.image, nickname: "test20"}
]

user_arr.each do |user|
  u = User.create!(
    email: user[:email],
    name: user[:name],
    nickname: user[:nickname],
    password: user[:password],
    image: user[:image]
  )
  10.times do
    p = u.posts.create!(
      title: Faker::Dune.character,
      body: Faker::Hipster.paragraph,
      liked_posts: user_arr.sample(10)
    )
    10.times do
      p.comments.create(
        text: Faker::Hipster.sentence
      )
    end
  end
end

puts "seeded"
