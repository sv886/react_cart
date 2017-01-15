Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :items, except: [:show]
    end
  end

end
