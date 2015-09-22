module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | ThIndex"
    end
  end
end
