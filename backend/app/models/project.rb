class Project < ApplicationRecord
  has_many :bugs, dependent: :destroy

  validates :project_name, presence: true
end
